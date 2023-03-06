const ejs = require('ejs');
const fs = require('fs/promises');
const { parse: yaml_parse } = require('yaml');


const gatherResources = async (config) => {
    const resource_path = `${config.settings.project_path}/resources/`;
    const social_icons_path = `${resource_path}/social_icons`;
    fs.mkdir(resource_path, { recursive: true });

    config.pages.forEach(page => {
        page.forEach(async section => {
            switch (section.section) {
                case 'title_area':
                    await fs.mkdir(`${resource_path}/social_icons`, { recursive: true });
                    section.socials.forEach(async social => {
                        await fs.copyFile(`${config.settings.social_icons}/${social.service}.png`, `${social_icons_path}/${social.service}.png`);
                    });
                    break;
                default:
                    break;
            }
        });
    });
}

const render = async () => {
    /** Global settings */
    const settings = {
        social_icons: "./resources/social_icons",
        project_path: `./${process.argv[2]}`,
    }

    /** Read a rider configuration from the given yaml file */
    const rawYaml = await fs.readFile(`${settings.project_path}/rider.yml`, { encoding: "utf-8" });
    const config = await yaml_parse(rawYaml);

    /** Render a rider html file with EJS and save the  and resources to the same folder where the configuration file resides */
    const renderedTemplate = await ejs.renderFile("./templates/template.ejs", { ...config, settings });
    await fs.writeFile(`${settings.project_path}/rider.html`, renderedTemplate);
    await gatherResources({ ...config, settings });
}

render();

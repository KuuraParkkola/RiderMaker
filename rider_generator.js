const ejs = require('ejs');
const fs = require('fs/promises');
const { parse: yaml_parse } = require('yaml');


const render = async () => {
    /** Global settings */
    const settings = {
        social_icons: "./resources/social_icons",
        project_path: `./${process.argv[2]}`,
    }

    /** Read a rider configuration from the given yaml file */
    const rawYaml = await fs.readFile(`${settings.project_path}/rider.yml`, { encoding: "utf-8" });
    const config = await yaml_parse(rawYaml);

    /** Render a rider html file with EJS and save the html to the same folder where the configuration file resides */
    const renderedTemplate = await ejs.renderFile("./templates/template.ejs", { ...config, settings });
    await fs.writeFile(`${settings.project_path}/rider.html`, renderedTemplate);
}

render();

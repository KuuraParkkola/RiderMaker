# Rider Maker

Generate professional looking technical riders for your band from premade components including channel lists, stage plots, equipment listings and many others.

## Installation

Requires node V18 and yarn to install. Clone the repository and run `yarn install` in the directory. You should now be good to go.

## Creating riders

The rider content is defined in a yaml file. See the demo folder for the structure of the file. To start, you should copy the demo folder and give it a descriptive name. Once you have tweaked the yaml file to your liking, run command `yarn start <relative path to the rider directory>`. A new html file will be rendered in the project directory. Open this file in a browser and print it without margins to make a pdf version.

Below is a breakdown of the yaml document as well as descriptions of each component.

### Document section
The document section of the file defines the name of the band, the title of the document and the document version. These fields are used in the headers and footers of the document. The page section defines the paper size of the document along with the margins.

### Rider components
The content of the document is defined as a nested list where the first layer holds pages of the document and one layer deeper are the components that each page contains. Essentially, as in the demo project, a double dash starts a new page. Each section has a required `section` field which defines the component to render, and optional `title` and `description` fields which are rendered before the component.

#### title_area
The title area component renders a layout with the name of the document, the name of the band and the given social media handles.

#### members
The members component lists the names and roles of each band member.

#### band_overview
The band overview component displays the band members, their instruments, channelcounts employed by those instruments and additional notes.

#### monitoring
The monitoring component displays the band's monitor groups, the players associated with a given group as well as a guideline for the monitor mix for the group.

#### contacts
The contacts component list critical contacts for the band, such as the band's contact person, manager and such. A common contact, email, phone number or such, can also be added.

#### requirements
The requirements section holds a number of header and description pairs for detailed requests and requirements for the performance.

#### channel_list
The channel list component lists all of the channels required by the band as well as additional information that helps when planning the stage configuration and  the mixer setup.

#### stage_plan
The stage plan component allows you to add an image of a stage plot to be added to the document.

#### equipment_list
The equipment list component is used to list pieces of equipment and their count. This can be used to for example enumerate equipment needed by the band for their show or, to for example list equipment the band brings with them,
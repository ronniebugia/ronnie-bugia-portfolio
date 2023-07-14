export const ListOfExperience = [
    {
        "title": "Amazon",
        "role": "Software Development Engineer",
        "location": "Toronto, ON",
        "startDate": "July 2022",
        "endDate": "Feb 2023",
        "description": 
        [
            "Developed a Python script to track IAM Identity Center users that have applications with expiring SAML certificates. Used Pandas and NumPy to clean 1000s of rows of data from various DynamoDB tables.",
            "Implemented tracing functionality to track user behavior and use of access and refresh tokens on our OIDC and OAuth services. Used AWS Cloudwatch Java libraries to log key metrics like access token ids, user ids, and SAML enabled application ids. Formatted logs so they can be consumed by the AWS Security team for auditing purposes.",
            "Deployed four microservices to three new regions (South Africa, Sri Lanka, California) to increase uptime and latency for AWS IAM Identity Center. Created new region configuration files, updated deployment pipelines, ran deployment and updated all test infrastructure to support the new regions.",
            "Created new Latency, Availability, Throughput, and Fault dashboards and alarms for API calls made on our microservices. Used AWS Cloudformation Python library to update our microservices' Cloudformation stack that managed resources like Cloudwatch alarms and dashboards. Alarms were used to page engineers during on-call rotations. Dashboards were used to improve data visualization and analysis during internal meetings."
        ],
        "bg-color": "card-blue-gradient"
    },
    {
        "title": "Publicis Sapient",
        "role": "Junior Associate Software Development Engineer",
        "location": "Toronto, ON",
        "startDate": "July 2021",
        "endDate": "June 2022",
        "description": [
            "Migrated static text and image content on a major grocery retail client's React.js website to a dynamically rendered Content Management System. The CMS was leveraged to decrease the time it takes to change important text and images on their website.",
            "Implemented a new item substitution modal feature for our grocery client's website checkout page which allowed users to substitute items they currently have in their cart. Adhered to Figma designs and leveraged React-Bootstrap to maintain a consistent style across all pages. Created front-end components using React.js.",
            "Created a new inventory search page using React.js that was populated dynamically with grocery items pulled from a Node.js API that fetches grocery items based on user search query.",
            "Developed the front-end for the payment, checkout, and final confirmation screens for our grocery client's new delivery and pick-up system pages. Leveraged Redux.js to fetch persistent cart state across different pages."
        ],
        "bg-color": "card-blue-gradient"
    },
    {
        "title": "Acoutera",
        "role": "Software Engineering Intern",
        "location": "Vancouver, BC",
        "startDate": "May 2020",
        "endDate": "June 2021",
        "description": [
            "Implemented a tagging and filtering system for the material selector on the 2D bathroom designer UI, improving the user experience. Added a new tag attribute to 100s of materials stored on MongoDB. Filter UI was created to conditionally show certain materials based on user-selected filters on our React.js web application.",
            "Contributed to the development of a new 3D bathroom designer. Created interactive UI/UX components to let users select what items appear in the final render using React.js and Redux.js. Added 3D models to virtual interactive environments that can be viewed in the browser using Three.js. Applied dynamically selected textures and shaders on 3D models to create realistic-looking renders of items appearing in the scene. Textures were applied dynamically based on the user selection of materials on the application's UI.",
            "Automated the contract and estimate system, generating accurate and dynamic cost breakdowns based on selected materials. Created saving functionality on our website to store contracts and estimate data on MongoDB.",
            "Developed an in-house CRM project management tool to assist project managers in organizing and managing construction jobs. Front-end was designed on Figma and implemented using React.js. This helped project managers oversee dozens of projects in one simple-to-use page."
        ],
        "bg-color": "card-blue-gradient"
    },
    {
        "title": "Grubgrab",
        "role": "Head of Technology & Software Engineer",
        "location": "Vancouver, BC",
        "startDate": "Aug 2019",
        "endDate": "April 2021",
        "description": 
        [
            "Led a team of three other developers on the creation of grubgrab.ca, a web application that allows users to order food on UBC campuses and subscribe to meal plans.",
            "Designed front-end components on Figma. Created and implemented UX/UI elements using Django Python and JavaScript to create beautiful, dynamic, and interactive pages.",
            "Integrated payment functions using the Stripe API to allow users to pay for meal plans using their credit card.",
            "Created back-end systems with Django and PostgreSQL for users, subscription plans, and order tracking. Implemented robust security features such as salting of passwords to preserve user privacy. Deployed the website using AWS EC2 instance to deliver a reliable and fast user experience."
        ],
        "bg-color": "card-blue-gradient"
    },
    {
        "title": "Plotly",
        "role": "Dash Analytics Applications Intern",
        "location": "Montreal, QC",
        "startDate": "May 2019",
        "endDate": "Aug 2019",
        "description": 
        [
            "Designed and built interactive web applications using Plotly’s Dash Python framework integrating various data visualization techniques like heat maps, 3D surface plots, histograms, and other charts to present data in a user-friendly manner.",
            "Conducted data analysis and manipulation using Pandas and NumPy extracted from various data sources.",
            "Built a web application that visualized data of all the Uber Rides in New York City using Dash Python framework to provide a comprehensive overview of ride patterns and behaviors. This application was showcased on the Plotly Dash App gallery.",
            "Designed and developed a web application that compared and visualized data from players in the NBA using player statistics and data made available on basketball-reference.com."
        ],
        "bg-color": "card-blue-gradient"
    }
]




# Social Media Followers Information

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.

## UX
This website is intended for marketers and potential sponsors that have an interest in working with Lily Singh. The website helps sponsors keen in on subscriber related information, which conversely helps marketers understand the potential impact of a collaborative project with the creator.  All followers, viewership and platform related information all sponsors to systematically select the creator that most appropriately matches their required project outcome. 

##### User Story 
* As a marketer, I want to promote a product, so I can increase sales, hence I would use this dashboard to further enquire data related to the creator and her outreach 
##### Wire Frame
* /static/Images/wireframe.jpeg

## Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.

### Existing Features
* Profile Image - Allows users to see the intended creator
* Subscriber Bar Chart – allows users to see the creator’s different social media platforms and subsequent followers. Allow sponsors to visually see the creator’s outreach potential. For this graph.js was used. 
* Follower's Gender Ratio pie chart – Allows users to understand the demographic of the creator’s viewers. Hence, sponsors can further understand the demographic of the creator, and realize if it applicable to their brand. For this custom script was used within the index.html page. 
* Social Platforms Ratio pie chart – Allows users to view the subscriber bar chart in an altered graphical manner. For this graph.js was used.
* Total YouTube Views 2017 line chart – Allows users to understand the creator’s viewership growth for the year. For this a new JS file was used (graph2.js).
* YouTube Subscriber Growth 2017 Allows users to see the creator’s growth on YouTube for the last year. For this graph2.js was used.

### Features Left to Implement
* Add charts on growth of individual social media projects 
* Add buttons to separate data based on month and years 
* Add a dashboard for each social media platform 

## Technologies Used
The following are the libraries were utilized for this project:
*   Bootstrap: This project uses Bootstrap to streamline the website layout. (https://bootswatch.com/3/)
*   Dc.js: Dimensional Charting was used to simplify chart creation. (https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css, https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.jS)
*   D3.js: The JS library was used to produce dynamic and interactive data conceptions (https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js)
*   Crossfilter: The JS library was used to allow users to organize and select data sets. (https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js)
The following are the labguages were utilized for this project:
*   HTML: Hypertext Markup Language was used to create the dashboard page. 
*   CSS: Cascading Style Sheets was used to style the dashboard into a more visually friendly site.


## Testing

Charting Crossfilter:
* Go to “Subscriber’s Growth” chart
* Try to click on twitter bar (pie chart adjusts)
* Try to click on Instagram bar (pie chart adjusts)
* Try to click on Facebook bar (pie chart adjusts)
* Try to click on YouTube bar (pie chart adjusts)

Go to “Social Platforms Ratio” pie chart
* Try to click on twitter bar (bar chart adjusts)
* Try to click on Instagram bar (bar chart adjusts)
* Try to click on Facebook bar (bar chart adjusts)
* Try to click on YouTube bar (bar chart adjusts)

Browser Compatibility 
* Due to DC, D3 and crossfilter’s limitation to the desktop, there is not much difference between browser sizes. 

## Deployment
To host on github, through cloud9 a github repository was set up. Subsequently, a git init was implemented.

There is no difference between the deployed and development version.

Running the code:
* To host locally, use the github link to view the site. 

### Content
Images:
* Lily Singh's profile image (/static/Images/Lily-Singh.jpg) was retrieved from: https://fashionmagazine.com/culture/lilly-singh-10-reasons-we-love-lilly-singh/
* The YouTube image (/static/Images/youtube-log.png) was retrieved from: https://commons.wikimedia.org/wiki/File:YouTube_social_white_square_(2017).svg
* The cirlce social media color image (/static/Images/all.png) was retrieved from: https://www.color-hex.com/color-palette/5255
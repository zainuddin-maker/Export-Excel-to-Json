
<h1 align="center"  style="font-weight:bold;" >
  <br>
  <!-- <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a> -->
  <br>
  Export Excel to Json FIle
  <br>
</h1>

> Data input from thingworx application .

<!-- <h4 align="center">A minimal Markdown Editor desktop app built on top of <a target="_blank">Electron</a>.</h4> -->

![Chat Preview](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/theapp.PNG?raw=true)
<!-- ![screenshot](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/Convert_excel_to_JSON.mp4?raw=true)

https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/Convert_excel_to_JSON.mp4 -->


This application is used to export excel data to json, with the input offset, this input is used to select row 1 - the offset is not considered, so offset + 1 becomes the key of the json data

## Example Data
<!-- - Data Value

            [
                {
                    Category: "111",
                    NPT: 32.2,
                    PT:67.8,
                
                },
                {
                    Category: "P2",
                    NPT: 68.63,
                    PT:31.37,
                },
                {
                    Category: "P3",
                    NPT: 100,
                    PT:0,
                },
                {
                    Category: "P4",
                    NPT: 100,
                    PT:0,
                },
                {
                    Category: "P5",
                    NPT: 100,
                    PT:0,
                },
                {
                    Category: "P6",
                    NPT: 100,
                    PT:0,
                },

            ]

- Configuratin Data

            [
                {
                    list_type: "NPT,PT",
                    list_color: "#003800,#f6682e",
                },
                 {
                    list_type: "PT",
                    list_color: "#f6db0f",
                }
            ] -->

offset = 1

## Usage example

<table>
<tr>
<td>





Click the button with the words "Input Excell", then a pop up will appear to select the excel file you want to export, don't worry, the popup will automatically be in excel type.
We give an example of excel input as below:
![Chat Preview](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/exampleinput.PNG?raw=true)

the pop up : 

![Chat Preview](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/popup.PNG?raw=true)

 after selecting, the json file will be downloaded, with the same name as the excel file.
 
 ![Chat Preview](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/downloadedjson.PNG?raw=true)

with data like below:

 ![Chat Preview](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/outputopen.PNG?raw=true)

and the button will change the text .

 ![Chat Preview](https://github.com/zainuddin-maker/Export-Excel-to-Json/blob/master/theappchange.PNG?raw=true)

  and also to reset the previous file, there is an X button to remove the previously saved file.


</td>
</tr>
</table>


<!-- ## BIND DATA

1.  JSONDocinformation , input - JSON - Data for Doc Information in header

   
        {
            name: (STRING),
            value: (STRING),
        }



2.  JSONHeaderinformation, input - JSON - Data for Headerinformation in header.

       
        {
            name: (STRING),
            value: (STRING),
        }

3.  ConfigurationWidth, input - INFOTABLE - Configuration widht each of column in excel.

       
        {
            width: (STRING),
        }


4.  BooleanDisplayButton , input -BOOLEAN - Input for button seen or not 
5.  Filename , input - STRING - name of file after exported
6.  Headername , input - STRING - the title in template document.
4.  LabourProductivity , input - INFOTABLE - Data for Labour Productuvity

        {
            name: (STRING),
            value: (STRING),
            unit:  (STRING),
         }

5.  DataAddChangeMaintanance , input - INFOTABLE - List of Change of Maintanance .

        datashape :
        {
            changefrom : (DATE),
            idmaintanance : (NUMBER),
        }

6.  DataClickMaintanance , output - INFOABLE - Data out after click maintanance .

        datashape :
        {
            form : (DATE) ,
            to : (DATE),
            id : (STRING),
            idmaintanance : (NUMBER),
            imgstatus : (STRING),
            status : (STRING),
            text : (STRING),
        }

7.  idRandom , input - STRING - Random ID for Application
8.  HeightOfHeader , input - NUMBER - change height of header tittle

## BIND TRIGGER

1. clickMaintanance, out - "Event triggered when clicked the maintanance"
1. updateMaintanance, in - "Event triggered when maintanance updated"


 -->





## Built with 

- [D3.js](https://d3js.org/) - D3.js is a JavaScript library for manipulating documents based on data.
- [html](https://www.w3schools.com/html/) - HTML is the standard markup language for Web pages.
- [css](https://www.w3schools.com/css/) - CSS is the language we use to style an HTML document















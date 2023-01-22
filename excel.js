
// function onChange() {
//     var e = document.getElementById("inputexcel");
//     // var value = e.value;
//     // var text = e.options[e.selectedIndex].text;
//     console.log("e");

//     console.log(e.target);
// }

// import { writeFile } from 'fs';

var offset = 0 ;

var divofchildbody = d3.select("body").append("div").attr("class","childdivofbody")

var inputbody =  divofchildbody.append("input").attr("type","file").attr("id","inputexcel").attr("accept",".xls,.xlsx").style("display","none")
var labelbody = divofchildbody.append("label").attr("id","id-button-in-label").attr("class","button-in-label").attr("for","inputexcel").text("Input Excell")
var labelbutton = divofchildbody.append("label").attr("class","removedivfile").text("X").on("click",function () {
    removefile();
})



const removefile =()=>{

    document.getElementById('inputexcel').value = "";
    d3.select("#id-button-in-label").text("Input Excell")
}        


const alphatonumber =(str)=> {
    return str.charCodeAt(0) - 65;
}

const numbertoalpha =(num)=> {
    return String.fromCharCode(num + 65);
}

let selectedFile;


document.getElementById("inputexcel").addEventListener("change", (event) => {
    console.log("event.target.files")

    console.log(event.target.files)
   var selectedFile = event.target.files[0];
    console.log("selectedFile");
    console.log(selectedFile.name);

   if (selectedFile && selectedFile.name){

    d3.select("#id-button-in-label").text(selectedFile.name)
   }

    if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            var datax = new Uint8Array(event.target.result);

            let workbook = XLSX.read(data, { type: "binary" });
             console.log("workbook");
             console.log(workbook);
           
            console.log(workbook.Sheets[workbook.SheetNames[0]]);
            var dataworkbooksheet = workbook.Sheets[workbook.SheetNames[0]];
            // console.log(workbook.Sheets[workbook.SheetNames[0]]["!ref"]);

            var stringarray = workbook.Sheets[workbook.SheetNames[0]]["!ref"];
            var splitstring = stringarray.split(":");
            console.log(splitstring);

            //     console.log(datasplit)
            var num1 = splitstring[0].match(/\d+/g);
            var letr1 = splitstring[0].match(/[a-zA-Z]+/g);

            // })
            var num2 = splitstring[1].match(/\d+/g);
            var letr2 = splitstring[1].match(/[a-zA-Z]+/g);

            let arrayofarray = [];

            for (let index = offset; index <= parseInt(num2[0]) - 1; index++) {
                var arraychild = [];

                for (
                    let index2 = 0;
                    index2 <= alphatonumber(letr2[0]);
                    index2++
                ) {
                    // arraychild.push(numbertoalpha(index2 )+(index+1) );
                    arraychild.push(
                        dataworkbooksheet[numbertoalpha(index2) + (index + 1)]
                            ? dataworkbooksheet[
                                  numbertoalpha(index2) + (index + 1)
                              ].v
                            : null
                    );
                }
                arrayofarray.push(arraychild);
            }

            console.log(arrayofarray);

            var listoutput = [];
            var datatesting = arrayofarray;
            datatesting.forEach((testing, i) => {
                if (i > 0) {
                    var objtemp = {};
                    testing.forEach((test, j) => {
                        if (datatesting[0][j]) {
                            objtemp[datatesting[0][j]] = testing[j];
                        } else {
                            objtemp["empty_" + j] = testing[j];
                        }
                    });
                    listoutput.push(objtemp);
                }
            });
            console.log("listoutput");
            console.log(listoutput);
            var jsonse = JSON.stringify(listoutput);
            var blob = new Blob([jsonse], {type: "application/json"});
            var url  = URL.createObjectURL(blob);
          
          

            var link = document.createElement("a");
            link.download = selectedFile.name.split(".")[0]  +".json";
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;

            //  workbook.SheetNames.forEach(sheet => {
            //   let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            // let rowObject = XLSX.utils.sheet_to_row_object_array(
            //     workbook.Sheets[workbook.SheetNames[0]]
            // );

            // console.log("rowObject");
            // console.log(rowObject);

            // document.getElementById("jsondata").innerHTML = JSON.stringify(
            //     listoutput,
            //     undefined,
            //     4
            // );
            //  });
        };
    }
});

function downloadURL(url, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

// let data = [
//     {
//         name: "jayanth",
//         data: "scd",
//         abc: "sdef",
//     },
// ];

// document.getElementById("button").addEventListener("click", () => {
//     // XLSX.utils.json_to_sheet(data, 'out.xlsx');

// });

Description:
Read Excel file and output is JSON data ( Json.parse) with offset

Bind Data:

1. JSONOutdata, output - JSON - output of excel file
2. Offest, input - number - row when the data excel begin to read.
3. filename, output - string - value of file name excel

style :

Bind Trigger:

1. OnChange, out - "Event triggered when excel already read"
2. openFile , in - "trigger to display popup to input file"
3. RemoveFile , in - " trigger to remove delected file and filename "

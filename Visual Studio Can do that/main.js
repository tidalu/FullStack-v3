// code . -> comand open the fie in vs code 

/** 
If the server starts on a different port, such as 3001 or 3002, this is because another process is currently running on port 3000. This is ok, but you may get confused during the exercises. It's a better idea to find the running process and kill it.
Mac/Linux: 
lsof -i tcp:3000
Find the ID of the process
kill <process id>
Windows
netstat -ano | findstr :3000
Find the ID of the process
taskkill /PID typeyourPIDhere /F
Note that for Windows, you must be running the Command Prompt as an Administrator.



Toggle Sidebar - Cmd/Ctrl + B
Open Command Palette - Cmd/Ctrl + Shift + P
Open File Switcher - Cmd/Ctrl + P

Toggle Integrated Terminal - Cmd/Ctrl + `
Open Settings - Cmd/Ctrl + ,
 
  
activity bar 
side bar 

*/
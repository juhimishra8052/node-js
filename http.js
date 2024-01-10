const http =require('http');
function dataControl(req,resp)
{
    resp.write("<h1>hlw ,this is juhi</h1>");
    resp.end();
}


http.createServer(dataControl).listen(4555);

// http.createServer((req,resp)=>{
//     resp.write("<h1>hlw this is juhi</h1>");
//     resp.end();
// }).listen(4555);
export default function any(req, res) {
    
    if (res.socket.server.io) {
        console.log( "Stopping socket server" );
        res.socket.server.io = null;
        res.end();
        return;
    }

    console.log( "No socket server found" );
    res.end();
}
export function inIframe(props) {
  var retval =  (window.location !== window.parent.location );
  return ( retval );
}


// https://stackoverflow.com/questions/19761241/window-close-and-self-close-do-not-close-the-window-in-chrome
// How to close a window even if we did not open it
export function window_close()
{
    window.close();
    setTimeout(function(){ console.log("Attempting self.close"); self.close(); }, 1000);
    setTimeout(function(){ console.log("Notifying the user."); alert(_TSUGI.window_close_message); open("about:blank", '_self').close(); }, 2000);
}


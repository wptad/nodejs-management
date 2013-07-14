##Nodejs API

##Difference between spawn and exec functions of child_process

* The most significant difference between `child_process.spawn` and `child_process.exec` is in what they return - spawn returns a `stream` and exec returns a `buffer`.

<http://www.hacksparrow.com/difference-between-spawn-and-exec-of-node-js-child_process.html>

## remove Path Recursive

```
var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

```

## POSIX signals

* REF: <http://en.wikipedia.org/wiki/SIGTERM#SIGTERM>

The list below documents the signals that are specified by the Single Unix Specification.[1] All signals are defined as macro constants in <signal.h> header file. The name of the macro constant consists of "SIG" prefix and several characters that identify the signal. Each macro constant expands into an integral number; these numbers can vary across platforms.
###SIGABRT
The SIGABRT signal is sent to a process to tell it to abort, i.e. to terminate. The signal is usually initiated by the process itself when it calls abort function of the C Standard Library, but it can be sent to the process from outside as well as any other signal.
###SIGALRM, SIGVTALRM and SIGPROF
The SIGALRM, SIGVTALRM and SIGPROF signal is sent to a process when the time limit specified in a call to a preceding alarm setting function (such as setitimer) elapses. SIGALRM is sent when real or clock time elapses. SIGVTALRM is sent when CPU time used by the process elapses. SIGPROF is sent when CPU time used by the process and by the system on behalf of the process elapses.
###SIGBUS
The SIGBUS signal is sent to a process when it causes a bus error. The conditions that lead to the signal being raised are, for example, incorrect memory access alignment or non-existent physical address.
###SIGCHLD
The SIGCHLD signal is sent to a process when a child process terminates, is interrupted, or resumes after being interrupted. One common usage of the signal is to instruct the operating system to clean up the resources used by a child process after its termination without an explicit call to the wait system call.
###SIGCONT
The SIGCONT signal instructs the operating system to restart a process previously paused by the SIGSTOP or SIGTSTP signal. One important use of this signal is in job control in the Unix shell.
###SIGFPE
The SIGFPE signal is sent to a process when it executes an erroneous arithmetic operation, such as division by zero.
###SIGHUP
The SIGHUP signal is sent to a process when its controlling terminal is closed. It was originally designed to notify the process of a serial line drop. In modern systems, this signal usually means that controlling pseudo or virtual terminal has been closed.[2]
###SIGILL
The SIGILL signal is sent to a process when it attempts to execute a malformed, unknown, or privileged instruction.
###SIGINT
The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process. This is typically initiated by pressing Control-C, but on some systems, the "delete" character or "break" key can be used.[3]
###SIGKILL
The SIGKILL signal is sent to a process to cause it to terminate immediately. In contrast to SIGTERM and SIGINT, this signal cannot be caught or ignored, and the receiving process cannot perform any clean-up upon receiving this signal.
###SIGPIPE
The SIGPIPE signal is sent to a process when it attempts to write to a pipe without a process connected to the other end.
###SIGQUIT
The SIGQUIT signal is sent to a process by its controlling terminal when the user requests that the process perform a core dump.
###SIGSEGV
The SIGSEGV signal is sent to a process when it makes an invalid virtual memory reference, or segmentation fault, i.e. when it performs a segmentation violation.[4]
###SIGSTOP
The SIGSTOP signal instructs the operating system to stop a process for later resumption.
###SIGTERM
The SIGTERM signal is sent to a process to request its termination. Unlike the SIGKILL signal, it can be caught and interpreted or ignored by the process. This allows the process to perform nice termination releasing resources and saving state if appropriate. It should be noted that SIGINT is nearly identical to SIGTERM.
###SIGTSTP
The SIGTSTP signal is sent to a process by its controlling terminal to request it to stop temporarily. It is commonly initiated by the user pressing Control-Z. Unlike SIGSTOP, the process can register a signal handler for or ignore the signal.
###SIGTTIN and SIGTTOU
The SIGTTIN and SIGTTOU signals are sent to a process when it attempts to read or write respectively from the tty while in the background. Typically, this signal can be received only by processes under job control; daemons do not have controlling terminals and should never receive this signal.
###SIGUSR1 and SIGUSR2
The SIGUSR1 and SIGUSR2 signals are sent to a process to indicate user-defined conditions.
###SIGPOLL
The SIGPOLL signal is sent to a process when an asynchronous I/O event occurs.
###SIGSYS
The SIGSYS signal is sent to a process when it passes a bad argument to a system call.
###SIGTRAP
The SIGTRAP signal is sent to a process when a condition arises that a debugger has requested to be informed of — for example, when a particular function is executed, or when a particular variable changes value.
###SIGURG
The SIGURG signal is sent to a process when a socket has urgent or out-of-band data available to read.
###SIGXCPU
The SIGXCPU signal is sent to a process when it has used up the CPU for a duration that exceeds a certain predetermined user-settable value.[5] The arrival of a SIGXCPU signal provides the receiving process a chance to quickly save any intermediate results and to exit gracefully, before it is terminated by the operating system using the SIGKILL signal.
###SIGXFSZ
The SIGXFSZ signal is sent to a process when it grows a file larger than the maximum allowed size.
###SIGRTMIN to SIGRTMAX
The SIGRTMIN to SIGRTMAX signals are intended to be used for user-defined purposes. They are real-time signals.
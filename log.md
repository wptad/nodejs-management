#log

## forever log

```
/usr/local/bin/forever start \
  -p /var/run/forever \
  --pidfile /var/run/your.app.pid \
  -l /root/log/your.app_$(date +%y%m%d).log -a \
  /usr/local/bin/nodemon --exitcrash --watch /root/app/your.app -e js,css,html /root/app/your.app/app.js --port 3001

```
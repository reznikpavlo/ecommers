
### Run mongodb
```
docker run -d --network host --name dbMongo \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=Qwertyu8 \
mongo
```

### Connect to mongodb
```
docker run -it --rm --network host mongo mongosh --host localhost -u admin -p Qwertyu8 --authenticationDatabase admin
```

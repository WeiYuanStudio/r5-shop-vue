# r5-shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project CI/CD

1. Setup Jenkins Pipeline
2. Install coscmd by `pip install coscmd`
3. Setup Jenkins credentials for cos secret

```groovy
environment {
    COS_SECRET_ID = credentials('r5-shop-cos-secret-id')
    COS_SECRET_KEY = credentials('r5-shop-cos-secret-key')
    COS_BUCKET = credentials('r5-shop-cos-bucket')
    COS_REGION = credentials('r5-shop-cos-region')
}
```

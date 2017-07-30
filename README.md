## 测试

## 引用

    cordova plugin add https://github.com/crossgit/SimpleMath.git

    cordova plugin rm cordova-plugin-mymath

## 使用

``` javascript
    document.addEventListener('deviceready',
            () => { 
                alert(JSON.stringify(cordova.plugins))
                cordova.plugins.SimpleMath.plus([5, 20], (msg) => {
                    alert("success:" + msg);
                }, (err) => {
                    alert("error:" + err);
                });
            }
            , false);

    }
```
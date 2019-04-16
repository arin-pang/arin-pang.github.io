if(location.href.indexOf('http://localhost:10001')>-1 || location.href.indexOf('http://192.168.1.')>-1){
  var TISTORY_CLIENT_ID =  '85755b376fdea37e204989b110a6b622';
  var TISTORY_REDIRECT_URL = 'http://localhost:10001/redirect.html';
}else{
  var TISTORY_CLIENT_ID =  '7e0e47fd077ca7057cfe47722f0c00dd';
  var TISTORY_REDIRECT_URL = 'https://ahryne.github.io/tistory-markdown/redirect.html'
}

var TISTORY_AUTH_URL = 'https://www.tistory.com/oauth/authorize?client_id='+TISTORY_CLIENT_ID+
'&redirect_uri='+TISTORY_REDIRECT_URL+'&response_type=token';
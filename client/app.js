window.onload = function () {

  var url = "https://restcountries.eu/rest/v2"

  makeRequest(url, requestComplete)

}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest()
  request.open("GET", url)
  request.onload = callback
  request.send()
}

var requestComplete = function(){
  if(this.status !== 200) return 
    var jsonString = this.responseText
    var countries = JSON.parse(jsonString);
    console.log(countries)
}
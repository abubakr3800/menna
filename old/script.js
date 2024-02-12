function get_data() {
    var xhr = new XMLHttpRequest();

    xhr.open("Get", "./data.json")

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response)
            // displayUsers(data);
            console.log(data);

            data.forEach(element => {
                console.log(element.clothing_type);
                if (element.clothing_type==parseURLParams(window.location.href).type[0]){
                    var father = document.getElementById("data"),
                        blouse= document.createElement("ul"),
                        brand=document.createElement("li"),
                        price=document.createElement("li");
                        
                        price.innerText=element.price;
                        brand.innerText=element.brand ;
                        price.setAttribute("class","test")
                        blouse.appendChild(price);
                        blouse.setAttribute("class","bls")
                        blouse.appendChild(brand);
                        father.setAttribute("class","fater");
                        father.appendChild(blouse);
                    
                }
                
            });
        }
    }
    xhr.send();
}

get_data()

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;
  
    if (query === url || query === "") return;
  
    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);
  
        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
  }

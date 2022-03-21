window.onload=function(){
    var artical1=document.getElementById('artical1')
    var artical2=document.getElementById('artical2')
    var artical3=document.getElementById('artical3')
    var contentdetialnumber=document.getElementById('contentdetialnumber')
    var contentdetialtitle=document.getElementById('contentdetialtitle')
    var contentdetiartical=document.getElementById('contentdetiartical')

    artical1.onclick=function(){
        contentdetialnumber.innerHTML="01"
        contentdetialtitle.innerHTML="Title Lorem Ipsum 01"
        contentdetiartical.innerHTML="01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    artical2.onclick=function(){
        contentdetialnumber.innerHTML="02"
        contentdetialtitle.innerHTML="Title Lorem Ipsum 02"
        contentdetiartical.innerHTML="02 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    artical3.onclick=function(){
        contentdetialnumber.innerHTML="03"
        contentdetialtitle.innerHTML="Title Lorem Ipsum 03"
        contentdetiartical.innerHTML="03 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
}
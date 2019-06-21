var options = [
  'a', 'b', 'c', 'd', 'e'
]
initOption()
function initOption () {
  let selected1=document.getElementById("selected1");
  selected1.innerHTML = "";
  console.log(selected1)
  options.forEach(value => {
    let option = document.createElement("option");
    option.name = "option1";
    option.text = value;
    selected1.appendChild(option)
  });
}
function selectOne(){

  let selected1=document.getElementById("selected1");
  let option1=selected1.getElementsByTagName("option");
  let selected2=document.getElementById("selected2");

  for(let i=0;i<option1.length;i++){
    if(option1[i].selected==true){
      selected2.appendChild(option1[i]);
      i--;
    }
  }
}
//ȫ��ѡ��
function selectAll(){
  let selected1=document.getElementById("selected1");
  let option1=selected1.getElementsByTagName("option");
  let selected2=document.getElementById("selected2");

  for(let i=0;i<option1.length;i++){

    selected2.appendChild(option1[i]);
    i--;

  }

}
//ɾ��
function deleteOne(){
  let selected2=document.getElementById("selected2");
  let option2=selected2.getElementsByTagName("option");
  let selected1=document.getElementById("selected1");
  for(let i=0;i<option2.length;i++){
    if(option2[i].selected==true){
      selected1.appendChild(option2[i]);
      i--;
    }
  }
}
//ȫ��ɾ��
function deletAll(){
  let selected2=document.getElementById("selected2");
  selected2.innerHTML = "";
  initOption()
}

function upOrdown(direct) {
  let obj = document.getElementById("selected2");
  let len = obj.length;
  let index = obj.selectedIndex;
  //�����1.û��ѡ�е���; 2.���ϣ�����������; 3.���£��������£���������
  if ( (index == -1) || (direct == -1 && index == 0) || (direct == 1 && index >= len - 1) )
    return;
  let swapIndex = index + direct;
  let tempOptions = new Array();
  for (let i = 0; i < len; i++){
    tempOptions[tempOptions.length] = obj.options[i == index?swapIndex:(i == swapIndex?index:i)];
  }
  obj.options.length = 0;
  for (let i = 0; i < len; i++)
    obj.options.add(tempOptions[i]);
}
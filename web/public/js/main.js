var addBtn = document.getElementById('addSelect');
var getBtn = document.getElementById('getSelect');
function GetRet(Opt) {
    return Math.round(Math.random() * Opt);
}

function createSelect(type, text) {
    var el = document.createElement(type);
    var textNode = document.createTextNode(text);
    el.appendChild(textNode);
    return el;
}

function main() {
    var selectArea = document.getElementById('selectArea');
    var count = 0;
    addBtn.addEventListener('click', function() {
        var selectStr = document.getElementById('selectInput').value;
        if (selectStr) {
            selectStr = count+ 1 + '. ' + selectStr;
            selectArea.appendChild(createSelect('div', selectStr));
            count++;
            console.log(selectArea)
            document.getElementById('selectInput').value = '';
        } else {
            alert('your input can not be empty');
        }

    });
    getBtn.addEventListener('click',function () {
    		alert(GetRet(count)+1)
    		while(selectArea.children.length>0){
    			selectArea.children[0].remove();
    		}
    		count = 0;
    })

}

main()

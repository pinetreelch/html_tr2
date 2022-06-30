

const urlSearchParams = new URLSearchParams(window.location.search)		/* URLSearchparms= get으로 url파라메터에 저장된 값을 가져옴 */  

const myName = urlSearchParams.get('nameip')
const myid = urlSearchParams.get('idip_1')
const email1 = urlSearchParams.get('emailip_1')
const sebank = urlSearchParams.get('selectbank')



document.getElementById('myName').innerHTML = myName
document.getElementById('myid').innerHTML = myid
document.getElementById('email1').innerHTML = email1
document.getElementById('sebank').innerHTML = sebank

window.onload=function(){
    if(document.getElementById("fo") != null){
        document.getElementById("fo").onsubmit=function(){
            var yhm = document.getElementById("user01");
            var mm = document.getElementById("password01");

            if(!(/^1\d{10}$/.test(yhm.value))){          /*��������ʽ�����������û�����ʽ�Ƿ�Ϊ��1��ͷ��11λ��*/
                alert("�����û�����ʽ����������������1��ͷ��11λ���û�����");
                return false;
            }

            if (mm.value != 12345) {
                alert("��������������������룡");
                return false;
            }
            return ture;
        }
    }




}


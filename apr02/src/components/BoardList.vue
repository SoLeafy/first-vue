<template>
    <div>
        <!-- 실제 출력 -->
        <table border="1">
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>IP</th>
            </tr>
            <tr v-for="n in list" v-bind:key="n.board_no">
                <td>{{ n.board_no }}</td>
                <td>{{ n.board_title }}</td>
                <td>{{ n.mno }}</td>
                <td>{{ n.board_date }}</td>
                <td>{{ n.board_ip }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BoardList',
    data() {
        return {
            list:[
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":413,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":412,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":411,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.75","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":410,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":409,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":408,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":407,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"1","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":406,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":405,"board_content":"가나다","mno":1},
                {"board_ip":"172.30.1.25","board_del":"0","board_title":"가나다","board_date":"2024-02-29 14:30:33.0","board_no":404,"board_content":"가나다","mno":1}
            ]
        }
    },
    mounted() {
        axios.get('http://172.30.1.59:3000/board').then((res) => {
            this.list = res.data.list
        })
        .catch((err) => {
            alert('문제가 발생했어요. 다시 시도해주세요. ' + err)
        });
    }
}
</script>

<style>

</style>
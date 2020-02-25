$(document).ready(function() {
    var table = $('#booklist').DataTable( {
				//deferRender: true,
				buttons: [
					{extend: 'copy', exportOptions: {modifier: {page: 'current'}}},
					{extend: 'excel', exportOptions: {modifier: {page: 'current'}}},
					{extend: 'print', exportOptions: {modifier: {page: 'current'}}},
					],
				dom: 'B<"top"lfip>rt<"bottom"ip>',
				pageLength: 20,
				lengthMenu: [ 10, 20, 50 ],
				order: [9, 'asc'],
				rowGroup: {dataSrc: 9},
				//stateSave: true,
				//ajax: "source/booklist.txt",
        data: dataSet,
        columns: [
					{ title: "서명(書名)" },
					{ title: "출처약어" },
					{ title: "쪽" },
					{ title: "출처" },
					{ title: "판사항" },
					{ title: "저자" },
					{ title: "출간년" },
					{ title: "고유번호" },
					{ title: "산일" },
					{ title: "대표서명", visible: false },
					{ title: "ID" },
					{ title: "한글검색용색인", visible: false },
					//{ title: "대표서명", visible: false },
        ]
		} );
		new $.fn.dataTable.FixedHeader( table );
} );

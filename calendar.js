document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // 초기 뷰 설정
      events: [
        // 이벤트 데이터를 배열로 제공
        {
          title: '회의',
          start: '2023-10-06',
          end: '2023-10-06'
        },
        // 다른 이벤트들 추가
        {
            title: '프로젝트 제출',
            start: '2023-10-11',
            end: '2023-10-11' 
        }
      ]
    });
    calendar.render(); // 캘린더 렌더링
  });
  
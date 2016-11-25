<template id="home">
  <div class="home">
    <mt-header title="找同学" fixed>
      <router-link to="/filter" slot="right">
        <mt-button class="home-filter"></mt-button>
      </router-link>
    </mt-header>
    <home-list></home-list>
  </div>
</template>
<script type="text/babel">
  import HomeList from '../components/HomeList';
  import Tabbar from '../components/Nav';
  export default {
    data () {
      return {
        lists: []
      }
    },
    components: {
      HomeList,
      Tabbar
    }
  }
</script>

<style lang="scss">
.home {
  .mint-header {
    height: 1.4666666666666666rem;
  }
  .home-filter {
    width: 0.5066666666666667rem;
    height: 0.52rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkNCNjVEMEVBRkJDMTFFNkE5QzVDOEYyNjk4RERFOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkNCNjVEMEZBRkJDMTFFNkE5QzVDOEYyNjk4RERFOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQ0I2NUQwQ0FGQkMxMUU2QTlDNUM4RjI2OThEREU4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQ0I2NUQwREFGQkMxMUU2QTlDNUM4RjI2OThEREU4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqeaKWAAAAMzSURBVHjaYvz//z/Dm19vRCc87C9Z83J1+Nvfb0UYGRj/M9AR/Gf4zyjMKvwmRDx0ZbZczkRJdslnjJ/+fOL1POux79ynsyYMgwDo8upd3GOy15Zl++ttPiBHsTOx/0yUTpqtwa1x/fvf75z0dAwnM+f361+vay14Oj/l8udL+iA3sdz6dksDJKnDo3upT70/dyBD68zHM2ZnP50xBbmJSYZd5jFI8AbQxfve7XMZKEcdeX/E7tbXm+BAArvpxc8XErIHpV9x7mb/r3pY+dHtr7dVQRmCnhhkJ8hukBtkDki9BrkJLHHyw0kLgb18P0ASIEee/XjGhF6OuvTpoj4sYIT3CX698Om8IUgcrmDzq03+vHu4f4MUKB9SfPLsxzMpWjvqw+/3AkbHDK6C7ATZveXVZj+YHIrCnW92eHLv4fwLUgjS8OTHExlaOQpktslx40sgu0CxBbIbWR5Dw/RH03JAikHY8oTFWZCvqO2od7/eCoHMBtnBv5f3Jyi20NVg1Tjr8cxMmOMMjuldf/T9kRy1HPX1z1cuq5OWZ0BmC+7l/37w3UEHbOpwGjDl4eR8mONAQf7652tRSh31598f5sDzAVtg5i5+tjgel1q8BtXfqWuFGWJz0vrUt7/fOMl1FEivxxm3fTDzZj+elYFPPUEDy26W9sEM8z3nswNYXXGQ6iiQHpBemDmgdExID1EGV92q7IIZ6nXWY8+Pvz/YSQkpkB6Y/rlP5qQRo49oX9fdrm2DGW5/yvb4na93VAjpATanRJCjb8HTBUnE2kdSlCCnOVBuffrjqTQutQ+/P5Q3Pm50Gaa+4U59Cyl2kZyIm+82NcIs67zXUYVLXcvd5nqYOpAeUu1hIrUVUKNUW6/JrXkNxP79/zcrLnWwVjCo4QfSQ6o9TOQ0UUTZRF+BaBZGlj+41DAzMv8F0YIsAu/JsYMsh/35/4eFFmopdhg9wKjDRh026jBSwPvf74VA9Je/X3hp5TCyyhgHIce9oFJfl0f34qByWK96X9773++EBFmF3g26NEZLR43mylGHjTpsRDns+7/vXJDa4SvPoHKYKZ/pST4Wvk/WAtaHydEPEGAAQ2jjnqo0m2IAAAAASUVORK5CYII=);
    background-size: cover;
  }
}
</style>

<div class="panel-heading">
    <h3 class="panel-title">${clothes}管理</h3>
    <a href="javascript:void(0);" class="btn btn-primary optionB add">添加${clothes}</a>
</div>
<div class="panel-body">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>${clothes}快照</th>
          <th>${clothes}类型</th>
          <th>${clothes}价格</th>
          <th>购买日期</th>
          <th>何时穿</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {@each data as it}
        <tr>
          <td><img src="/savour/Clothes/${it.name}.jpg" width="50" height="50"></td>
          <td>${it.type}</td>
          <td>${it.price}</td>
          <td>${it.buy_date}</td>
          <td>${it.season}</td>
          <td>
            <a id="${it.id}" href="javascript:void(0);" class="btn btn-warning option op2 edit" data-original-title="" title=""><span class="opspan glyphicon glyphicon-wrench"></span></a>
            <a id="${it.id}" href="javascript:void(0);" class="btn btn-danger option op3 edit" data-original-title="" title=""><span class="opspan glyphicon glyphicon-remove"></span></a>
          </td>
        </tr>
        {@/each}

      </tbody>
    </table>
</div>
<!-- 添加模态框 -->
<div class="modal fade" id="addModel">
    <div class="modal-dialog">
        <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">添加${clothes}</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group" style="width: 400px; position: relative; left: 30px;">
                        <span>${clothes}快照</span>
                        <span class="btn btn-info fileinput-button form-control">
                            <span>请选择服饰图片</span>
                            <input id="fileupload" type="file" name="files[]">
                        </span> 
                    </div>
            <!-- form here -->
            <form class="form-horizontal" role="form" action="${add}" method="POST">

                    <div class="form-group" style="padding:0 0 0 82px;">
                        <img id="image" src="" width="100" height="100"> 
                    </div>

                    <div class="form-group">
                        <span>${clothes}类型</span>
                        <select class="form-control" name="type">
                            <option value="1">正式</option>
                            <option value="2">休闲</option>
                            <option value="3">运动</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <span>${clothes}品牌</span>
                        <input type="text" class="form-control" name="brand" placeholder="填写${clothes}品牌">   
                    </div>
                    <div class="form-group">
                        <span>${clothes}价格</span>
                        <input type="text" class="form-control" name="price" placeholder="填写${clothes}价格">   
                    </div>
                    <div class="form-group">
                        <span>购买时间</span>
                        <!-- <input type="text" class="form-control" id="inputUsername" name="username" placeholder="填写购买时间">  -->
                        <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                        <input type="text" style="width: 200px" name="buytime" id="buytime" class="form-control" value=""> 
                    </div>
                    <div class="form-group">
                        <span>何时穿着</span>
                        <select class="form-control" name="season">
                            <option value="1">春天</option>
                            <option value="2">夏天</option>
                            <option value="3">秋天</option>
                            <option value="4">冬天</option>
                            <option value="5">春秋</option>
                        </select>   
                    </div>
                    <div class="form-group">
                        <span>记录评价</span>
                        <input type="text" class="form-control" name="commit" placeholder="评价">   
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Done</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>
<!-- 编辑模态框 -->
<div class="modal fade" id="editModel">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">编辑${clothes}</h4>
                </div>
                <div class="modal-body">
            <!-- form here -->
            <form class="form-horizontal" role="form" action="${add}" method="POST">

                    <div class="form-group">
                        <span>${clothes}类型</span>
                        <input type="text" class="form-control" id="inputUsername" name="username" placeholder="填写${clothes}类型">   
                    </div>
                    <div class="form-group">
                        <span>${clothes}品牌</span>
                        <input type="text" class="form-control" id="inputUsername" name="username" placeholder="填写${clothes}品牌">   
                    </div>
                    <div class="form-group">
                        <span>${clothes}价格</span>
                        <input type="text" class="form-control" id="inputUsername" name="username" placeholder="填写${clothes}价格">   
                    </div>
                    <div class="form-group">
                        <span>购买时间</span>
                        <input type="text" class="form-control" id="inputUsername" name="username" placeholder="填写购买时间">   
                    </div>
                    <div class="form-group">
                        <span>何时穿</span>
                        <input type="text" class="form-control" id="inputUsername" name="username" placeholder="适合穿着的时间">   
                    </div>
                    <div class="form-group">
                        <span>评价</span>
                        <input type="text" class="form-control" id="inputUsername" name="username" placeholder="评价">   
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Done</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </form>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>






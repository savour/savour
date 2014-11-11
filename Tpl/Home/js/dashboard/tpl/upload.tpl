<form class="form-horizontal" role="form" href="#" method="GET">
<div class="panel panel-info">   
    <div class="panel-heading">
        <h3 class="panel-title">上传服饰</h3>
    </div>
    <div class="panel-body">

        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">上传服饰</label>
            <div class="col-sm-10">
                <span class="btn btn-info fileinput-button">
                    <span>请选择服饰图片</span>
                    <input id="fileupload" type="file" name="files[]">
                </span>
            </div>
        </div>

        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label"></label>
            <div class="col-sm-10">
                <img id="callbackUrl" src="../../../testClothes/c1.jpg" width="200" height="200" alt="图在这里">
            </div>
        </div>

        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">服饰分类</label>
            <div class="col-sm-10">
                <select class="form-control" name="clothes">
                    <option value="1">上衣</option>
                    <option value="2">裤子/裙子</option>
                    <option value="3">鞋子</option>
                </select>
            </div>
        </div>

        <!-- 这个地方要联动的 -->
        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">服饰类别</label>
            <div class="col-sm-10">
                <select class="form-control" name="color">
                    <option value="1">西装</option>
                    <option value="2">牛仔</option>
                    <option value="3">衬衣</option>
                </select>
            </div>
        </div>


        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">服饰颜色</label>
            <div class="col-sm-10">
                <select class="form-control" name="color">
                    <option value="1">火辣热情的彩色</option>
                    <option value="2">低调深沉的彩色</option>
                    <option value="3">火辣热情的单色</option>
                    <option value="4">低调深沉的单色</option>
                </select>
            </div>
        </div>


        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">服饰颜色</label>
            <div class="col-sm-10">
                <select class="form-control" name="color">
                    <option value="1">火辣热情的彩色</option>
                    <option value="2">低调深沉的彩色</option>
                    <option value="3">火辣热情的单色</option>
                    <option value="4">低调深沉的单色</option>
                </select>
            </div>
        </div>


        <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">服饰颜色</label>
            <div class="col-sm-10">
                <select class="form-control" name="color">
                    <option value="1">火辣热情的彩色</option>
                    <option value="2">低调深沉的彩色</option>
                    <option value="3">火辣热情的单色</option>
                    <option value="4">低调深沉的单色</option>
                </select>
            </div>
        </div>

    </div>

    <div class="panel-footer" style="text-align: right;">
        <button type="submit" class="btn btn-info">确定上传</button>    
    </div>
</div>
</form>














$(function(){

    var mySettings = { 
        rows: 3,                    // number of rows [3 ... 9] 
        cols: 3,                    // number of columns [3 ... 9] 
        hole: 16,                   // initial hole position [1 ... rows*columns] 
        shuffle: false,             // initially show shuffled pieces [true|false] 
        numbers: false,              // initially show numbers on pieces [true|false] 
        language: 'en',             // language for gui elements [language code] 
        // display additional gui controls   
        control: {   
            shufflePieces: true,    // 显示 'Shuffle' 按钮[true|false]   
            confirmShuffle: false,   // 打乱之前询问 [true|false]   
            toggleOriginal: false,   // 显示 'Original' 按钮 [true|false]   
            toggleNumbers: true,    // 显示 'Numbers' 按钮[true|false]   
            counter: false,          // 显示移动步数 [true|false]   
            timer: false,            // 显示计时器 [true|false]   
            pauseTimer: false        // 按下 'Original' 按钮时暂停计数器  
        },   
        style: {   
            gridSize: 0,            // 2块拼图之间的间距   
            overlap: false,          // 如果为 true, 相邻两块拼图的边界重叠（仅当gridSize为0时有效）  
            backgroundOpacity: 0.1  // 原始图像的透明度   // [0 ... 1] (0 意为不显示原始图像)   
        }   
    };   
    $('#flower').jqPuzzle(mySettings); 

});
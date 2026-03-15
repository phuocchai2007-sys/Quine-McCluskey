document.getElementById('solve-btn').addEventListener('click', function() {
    let vars = parseInt(document.getElementById('variables').value);
    let mintermsStr = document.getElementById('minterms').value;

    if (!vars || !mintermsStr) {
        alert("Vui lòng nhập đủ dữ liệu!");
        return;
    }

    // Truyền dữ liệu sang C và nhận kết quả
    const result = Module.ccall(
        'solve_qm', 
        'string', 
        ['number', 'string'], 
        [vars, mintermsStr]
    );

    document.getElementById('result-output').innerText = result;
});
/*
    빙고

    hoony는 빙고 게임을 하고 있습니다. 
    n * n의 게임판의 정보가 담긴 이중배열 board가 주어집니다. 
    hoony가 마크를 하면 true, 아직 빈 곳은 false로 적혀있습니다. 
    hoony가 달성한 빙고의 갯수를 리턴해주세요. 

    단, board 배열 다음으로는 target이라는 매개변수가 옵션으로 올 수 있습니다.
    target에는 hoony가 다음에 마크를 할 위치의 인덱스가 배열에 담겨있습니다.  

    
    보드 예시
    --------------------
    true | false | false
    --------------------
    true | true | false
    --------------------
    true | false | true
    --------------------

    위와 같은 상황에서 hoony가 달성한 빙고의 갯수는 2입니다. 

    input
    ------
    board
    -----------------------------------------------------------------
    [[true ,false, false], [true, true, false], [true, false, true]]

    output
    ------
      2



    여기에 매개변수 target이 [2, 1]로 주어질 경우, 
    board[2][1]이 true로 바뀝니다. 
    따라서 빙고의 갯수는 3이 됩니다. 

    --------------------
    true | false  | false
    --------------------
    true | true   | false
    --------------------
    true | *false* | true
           => true
    --------------------

    input
    ------
    board
    -----------------------------------------------------------------
    [[true ,false, false], [true, true, false], [true, false, true]]
    ------
    target
    ------
    [2, 1]

    output
    ------
      3
*/

function bingo(board, target) {
  // 여기에서 작업하세요.
}

module.exports = bingo

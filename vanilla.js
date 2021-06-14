const player={
    name:'JH',
    points:10,
    fat:false,
};
console.log(player);
player.fat =true; /*constnat 안의 내용을 바꾸는 것은 문제없음 */
player.lastName='potato';
player.points= player.points+15;
console.log(player.points);
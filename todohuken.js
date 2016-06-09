var todohukenList = [
    {kanji:'北海道',hiragana:'ほっかいどう'},
    {kanji:'青森県',hiragana:'あおもり',},
    {kanji:'岩手県',hiragana:'いわて'},
    {kanji:'宮城県',hiragana:'みやぎ'},
    {kanji:'秋田県',hiragana:'あきた'},
    {kanji:'山形県',hiragana:'やまがた'},
    {kanji:'福島県',hiragana:'ふくしま'},
    {kanji:'茨城県',hiragana:'いばらき'},
    {kanji:'栃木県',hiragana:'とちぎ'},
    {kanji:'群馬県',hiragana:'ぐんま'},
    {kanji:'埼玉県',hiragana:'さいたま'},
    {kanji:'千葉県',hiragana:'ちば'},
    {kanji:'東京都',hiragana:'とうきょう'},
    {kanji:'神奈川県',hiragana:'かながわ'},
    {kanji:'新潟県',hiragana:'にいがた'},
    {kanji:'富山県',hiragana:'とやま'},
    {kanji:'石川県',hiragana:'いしかわ'},
    {kanji:'福井県',hiragana:'ふくい'},
    {kanji:'山梨県',hiragana:'やまなし'},
    {kanji:'長野県',hiragana:'ながの'},
    {kanji:'岐阜県',hiragana:'ぎふ'},
    {kanji:'静岡県',hiragana:'しずおか'},
    {kanji:'愛知県',hiragana:'あいち'},
    {kanji:'三重県',hiragana:'みえ'},
    {kanji:'滋賀県',hiragana:'しが'},
    {kanji:'京都府',hiragana:'きょうと'},
    {kanji:'大阪府',hiragana:'おおさか'},
    {kanji:'兵庫県',hiragana:'ひょうご'},
    {kanji:'奈良県',hiragana:'なら'},
    {kanji:'和歌山県',hiragana:'わかやま'},
    {kanji:'鳥取県',hiragana:'とっとり'},
    {kanji:'島根県',hiragana:'しまね'},
    {kanji:'岡山県',hiragana:'おかやま'},
    {kanji:'広島県',hiragana:'ひろしま'},
    {kanji:'山口県',hiragana:'やまぐち'},
    {kanji:'徳島県',hiragana:'とくしま'},
    {kanji:'香川県',hiragana:'かがわ'},
    {kanji:'愛媛県',hiragana:'えひめ'},
    {kanji:'高知県',hiragana:'こうち'},
    {kanji:'福岡県',hiragana:'ふくおか'},
    {kanji:'佐賀県',hiragana:'さが'},
    {kanji:'長崎県',hiragana:'ながさき'},
    {kanji:'熊本県',hiragana:'くまもと'},
    {kanji:'大分県',hiragana:'おおいた'},
    {kanji:'宮崎県',hiragana:'みやざき'},
    {kanji:'鹿児島県',hiragana:'かごしま'},
    {kanji:'沖縄県',hiragana:'おきなわ'}
]

for(var i = 0; i < todohukenList.length; i++){
    var todohukenCode = 'JP-';
    if(i < 9){
	todohukenCode += 0;
    }
    todohukenCode += i+1;
    todohukenList[i].todohukenCode = todohukenCode;
}

todohukenList.sort(function(a,b){
    if(a.hiragana < b.hiragana) {
	return -1;
    }else if(a.hiragana > b.hiragana){
	return 1;
    }else {
	return 0;
    }
});

for(var i = 0; i < todohukenList.length; i++){
    console.log(todohukenList[i].todohukenCode + ' ', todohukenList[i].kanji + ' ' + todohukenList[i].hiragana);
}

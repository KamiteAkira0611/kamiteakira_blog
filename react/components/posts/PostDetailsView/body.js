import styles from "./style.module.scss";

function Body() {
  return (
    <div className={styles.PostDetail}>
      <h2>
        <a href="/" rel="nofollow"></a> はじめに
      </h2>
      <p>
        うちの会社ではエンジニアは総勢で 20~30
        人ぐらいおり(自信ない)、プロダクトごとにチームを分けて開発しています。また、コロナ渦になるちょっと前ぐらいからリモートでの開発が制度として導入され、コロナ渦になってからは大体のチームがフルリモートで日々開発しています。
      </p>
      <p>
        1
        年半ぐらいフルリモートで開発していると他のチームの人と話す機会が激減しました(ボクは)。他チームにはどんな人がいるのか(最近入社してきた人含め)、他チームってどんなことやってるのか知りたいなぁと思いつつ、そんな機会ないしなぁとウダウダしてました。
      </p>
      <p>
        そんなある日、
        <a href="/" rel="nofollow">
          freee Tech Night Online
        </a>
        という freee
        の配信を楽しく拝見してたんですが、よく見てみるとエンジニアの方(のぶじゃすさん)がラジオパーソナリティをやられていて、ラジオパーソナリティやるの面白そう！と思い会社に了解も取らずに勝手に社内で似たようなものを企画してみることに(笑)
      </p>
      <h2>
        <a href="/" rel="nofollow"></a> 企画したもの
      </h2>
      <p>
        個人的に
        <code>
          他チームにはどんな人がいるのか(最近入社してきた人含め)、他チームってどんなことやってるのか
        </code>
        が知りたかったので、各チームから一人ずつゲストを呼んで、ボクが聞きたいことを聞くだけっていうのが基本のコンセプトです(めちゃめちゃ自分勝手)
        <br />
        それだけでなくプラスでちゃんと見てる人が話してる内容にコメントできるポッドキャストのようになればなってことで
        <code>sot-podcast</code>って名前にしました。
        <br />(<code>sot</code>
        は社名の略称です。この時点でまだ会社の了承は得てない)
      </p>
      <p>実際に企画したものを LT で紹介</p>
    </div>
  );
}

export default Body;
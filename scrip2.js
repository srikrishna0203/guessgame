let name2=localStorage.getItem('name')
        document.getElementById('t2').textContent="Hello"+" "+name2;
        let secretno=(Math.ceil(Math.random()*20))
        console.log(secretno)
        let highscore=Number('0')
        console.log(secretno);
        function check()
        {
            let score1=Number(document.getElementById('score1').textContent)
            let guessno=Number(document.getElementById('t1').value)
            if(!(guessno)=="")
            {
                if(guessno>secretno)
                {
                    document.getElementById('disp').innerHTML="Too-High"
                    score1=score1-1
                    document.getElementById('score1').textContent=score1
                    document.querySelector('.con').style.background="red"   
                }
                else if(guessno<secretno)
                {
                    document.getElementById('disp').textContent="Too-Low"
                    score1=score1-1
                    document.getElementById('score1').textContent=score1
                    document.querySelector('.con').style.background="red"   
                }
                else if(guessno===secretno)
                {
                    document.getElementById('cong').style.display="block";
                    document.getElementById('disp').textContent="Correct number"
                    document.getElementById('t3').textContent=secretno;
                    if(score1<20)
                    {
                        score1=score1+1
                        document.getElementById('score1').textContent=score1;
                    }
                    if(highscore<score1)
                    {
                        highscore=score1
                        document.getElementById('highscore').textContent=highscore;
                    }
                    document.querySelector('.con').style.background="green"    
                }
            }
            else{
                document.getElementById('disp').innerHTML="Enter Number!!"
            }           
        }
        function replay()
        {
            document.getElementById('disp').textContent="Start Guessing..."
            document.getElementById('score1').textContent="20"
            secretno=(Math.ceil(Math.random()*20))
            document.getElementById('t1').value=""
            document.getElementById('t3').textContent="?"
            document.getElementById('cong').style.display="none";
            document.querySelector('.con').style.background="linear-gradient(rgba(0, 0, 0),rgba(255, 0, 0,0.6)";
        }
export function romanToInteger(str) {
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let result = 0;
    let arab=[];
    for(let i=0;i<str.length;i++)
    {
     switch(str[i])
     {
      case 'I': arab[i]=1;    break;
      case 'V': arab[i]=5;    break;
      case 'X': arab[i]=10;   break;
      case 'L': arab[i]=50;   break;
      case 'C': arab[i]=100;  break;
      case 'D': arab[i]=500;  break;
			case 'M': arab[i]=1000; break;          
     }
    }
    
    for(let i=0;i<str.length;i++)
    {
     if(arab[i]<arab[i+1])
      result=result-arab[i];
    else
     result=result+arab[i];
    }
    return result;
}

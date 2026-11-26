public class Solution {
    public bool CanAliceWin(int n) {
        int stones=10;
        bool isAlice=true;

        while(n>=stones){
            n-=stones;
            stones--;
            isAlice=!isAlice;
        }
        return !isAlice;
    }
}
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <limits.h>
//#include <jmpset.h>
#include <math.h>
#include <time.h>
int main(void);
void C_01(void){
    printf("C_01\n");
    printf("Hello, World!\n");
}
int C_02(void){
    int i = 0;
    for (i = 0; i<INT_MAX; i++){
            
        if (i%10000000==0){
            sleep(1);
            printf("\r%d", i);
        } 
    }
    return 0;
}

int main(void){
    C_01();
    C_02();
    return 0;
}
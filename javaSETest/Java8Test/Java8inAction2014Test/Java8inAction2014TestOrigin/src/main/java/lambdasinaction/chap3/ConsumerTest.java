package lambdasinaction.chap3;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

/**
 * Created by YunZhang on 13/6/17.
 */
public class ConsumerTest {
    public static <T> void forEach(List<T> list, Consumer<T> c){
        for (T i: list) {
            c.accept(i);
        }
    }

    public static void main(String[] args) {
        forEach(Arrays.asList(1,2,3,4,5),(Integer i)-> System.out.println(i));
    }
}

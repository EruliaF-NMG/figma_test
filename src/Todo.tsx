import { FunctionComponent } from 'react';
import styles from './styles/todo.module.css';


const Todo:FunctionComponent = () => {
  	return (
        <div className={styles.todo}>
            <div className={styles.tasks}>
                    <div className={styles.list}>
                        <div className={styles.task}>
                                <img className={styles.checkIcon5} alt="" src="check.svg" />
                                <div className={styles.integerUrnaInterdum5}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
                                <img className={styles.trashIcon5} alt="" src="trash.svg" />
                        </div>
                        <div className={styles.task1}>
                                <img className={styles.checkIcon5} alt="" src="check.svg" />
                                <div className={styles.integerUrnaInterdum5}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
                                <img className={styles.trashIcon5} alt="" src="trash.svg" />
                        </div>
                        <div className={styles.task1}>
                                <img className={styles.checkIcon5} alt="" src="check.svg" />
                                <div className={styles.integerUrnaInterdum5}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
                                <img className={styles.trashIcon5} alt="" src="trash.svg" />
                        </div>
                        <div className={styles.task3}>
                                <img className={styles.checkIcon8} alt="" src="check.svg" />
                                <div className={styles.integerUrnaInterdum8}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
                                <img className={styles.trashIcon5} alt="" src="trash.svg" />
                        </div>
                        <div className={styles.task3}>
                                <img className={styles.checkIcon8} alt="" src="check.svg" />
                                <div className={styles.integerUrnaInterdum8}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>
                                <img className={styles.trashIcon5} alt="" src="trash.svg" />
                        </div>
                    </div>
            </div>
            <div className={styles.background1} />
            <div className={styles.logo}>
                    <div className={styles.todo1}>
                        <span>to</span>
                        <span className={styles.do}>do</span>
                    </div>
                    <img className={styles.rocketIcon1} alt="" src="/rocket.svg" />
            </div>
            <div className={styles.info}>
                    <div className={styles.created}>
                        <b className={styles.todoList}>Todo List</b>
                    </div>
            </div>
            <div className={styles.button}>
                    <b className={styles.criar}>App New</b>
                    <img className={styles.plusIcon1} alt="" src="plus.svg" />
            </div>
        </div>
    );
};

export default Todo;

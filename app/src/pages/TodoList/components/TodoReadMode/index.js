import styles from "./style.module.scss";

const TodoReadMode = ({id, text, handleComplete, handleRemove, handleEdit, isCompleted}) => {
    return (
        <ol className={styles.wrapper}>
            <p style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</p>

            <div className={styles.buttonArea}>
                {!isCompleted && (
                    <>
                        <button className={styles.controlButton} onClick={() => handleComplete(id)}>Complete</button>
                        <button className={styles.controlButton} onClick={() => handleEdit(id)}>Edit</button>
                    </>
                )}
                <button className={styles.controlButton} onClick={() => handleRemove(id)}>Delete</button>
            </div>
        </ol>
    )
}

export default TodoReadMode;

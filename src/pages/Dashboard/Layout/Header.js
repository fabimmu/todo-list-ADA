import styles from './Header.module.css'
const Header = () =>{
return(
    <header className={styles.titleBox}>
  <p className={"title has-text-white"}>To Do List App</p>
</header>
)
}
export {Header}
import { Avatar, Button, Flex, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  }
}))

export default function Home() {

  const { classes } = useStyles()
  return (

    <Flex justify={'space-between'} align={'center'} className={classes.container}>
      <div>LOGO</div>
      <Button variant="light">Button</Button>
      <Avatar size="lg" radius="xl"> USER</Avatar>
    </Flex>
  )
}

import styles from './HomeBody.module.css';
import {Box, Select, ActionIcon, Text, Button} from "@mantine/core";
import {DatePickerInput} from '@mantine/dates';
import {IconArrowRight, IconArrowMoveRight, IconArrowsRightLeft} from '@tabler/icons-react';
import {motion, useDragControls} from 'framer-motion';
import {useState} from "react";

function HomeBody() {
    const controls = useDragControls();
    const [showComeBack, setShowComeBack] = useState(true);
    return (
        <Box className={styles.HomeBody}>
            <Box className={styles.container}>
                <Box className={styles.leftSide}>
                    <Button sx={
                        !showComeBack ? {
                            display: 'flex',
                            flex: 2,
                            backgroundColor: ' #f7a828',
                            color: '#fff',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#f7a828',
                            }
                        } : {
                            display: 'flex',
                            flex: 2,
                            backgroundColor: ' #015fb7',
                            color: '#fff',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#015fb7',
                            }

                        }

                    } onClick={
                        () => {
                            setShowComeBack(false);
                        }
                    }>
                        TEK YÖN
                    </Button>

                    <Button
                        sx={showComeBack ? {
                            display: 'flex',
                            flex: 2,

                            backgroundColor: ' #f7a828',
                            color: '#fff',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#f7a828',
                            }
                        } : {
                            display: 'flex',
                            flex: 2,

                            backgroundColor: ' #015fb7',
                            color: '#fff',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#015fb7',
                            }

                        }}
                        onClick={
                            () => {
                                setShowComeBack(true);
                            }
                        }>

                        GİDİŞ DÖNÜŞ
                    </Button>
                </Box>
                <Box className={styles.middle}>
                    <Box className={styles.locations}>
                        <Select
                            data={['React', 'Angular', 'Svelte', 'Vue']}
                            placeholder="Şehir Seçiniz"
                            label="Nereden"
                            variant="default"
                            radius="md"
                            size="lg"
                            withAsterisk
                            labelProps={
                                {
                                    style: {
                                        marginLeft: '1rem',
                                        marginBottom: '1rem'
                                    }
                                }
                            }
                            rightSectionProps={
                                {
                                    style: {
                                        display: 'none'
                                    }
                                }
                            }
                        />
                        <ActionIcon sx={{alignSelf: "flex-end"}} size="2xl" radius="md" variant="transparent">
                            <IconArrowsRightLeft size="2.3rem"/>
                        </ActionIcon>
                        <Select
                            data={['React', 'Angular', 'Svelte', 'Vue']}
                            placeholder="Şehir Seçiniz"
                            label="Nereye"
                            variant="default"
                            radius="md"
                            size="lg"
                            withAsterisk
                            labelProps={
                                {
                                    style: {
                                        marginLeft: '1rem',
                                        marginBottom: '1rem'
                                    }
                                }
                            }
                            rightSectionProps={
                                {
                                    style: {
                                        display: 'none'
                                    }
                                }
                            }
                        />
                    </Box>
                    <Box className={styles.dates}>
                        <motion.div>
                            <DatePickerInput
                                placeholder="Tarih Seçiniz"
                                label="Gidiş Tarihi"
                                variant="default"
                                radius="md"
                                size="lg"
                                w={showComeBack ? 270 : 650}
                                withAsterisk
                                labelProps={
                                    {
                                        style: {
                                            marginLeft: '1rem',
                                            marginBottom: '1rem'
                                        }
                                    }
                                }
                            />
                        </motion.div>


                        {showComeBack && (
                            <motion.div
                                dragControls={controls}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                    duration: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                            >
                                <DatePickerInput
                                    placeholder="Tarih Seçiniz"
                                    label="Dönüş Tarihi"
                                    variant="default"
                                    radius="md"
                                    size="lg"
                                    w={275}
                                    withAsterisk
                                    labelProps={
                                        {
                                            style: {
                                                marginLeft: '1rem',
                                                marginBottom: '1rem'
                                            }
                                        }
                                    }
                                />
                            </motion.div>
                        )}


                    </Box>
                </Box>
                <Box className={styles.rightSide}>
                    <Box className={styles.button}>
                        <IconArrowRight size="5rem"/>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default HomeBody;
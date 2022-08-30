import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import testService from '../../core/services/auth-service/test.service';

interface IQuestions {
    id: number,
    question: any,
    heading?: any,
    explanation?: any,
    image?: any,
    questions: any,
    answer: any
}
interface IExam {
    author: number,
    createdAt: any,
    id: any,
    questions?: IQuestions[]
}


export const Exam = () => {
    const [exam, setExam] = useState<IExam>()
    const questoions = exam?.questions?.map((question: IQuestions, i) => {
        return (
            <div key={i}>
                <p> <strong> {question.id}</strong></p>
                <h4>{question.heading}</h4>
                <h6>{question.question}</h6>
                {question.image &&
                    <img src={question.image} alt={'image-of ' + question.id} />
                }
                <ol>
                    <li>{question.questions[0]}</li>
                    <li>{question.questions[1]}</li>
                    <li>{question.questions[2]}</li>
                    <li>{question.questions[3]}</li>
                </ol>
                <br />

                <p>{question.answer}</p>
                <p>{question.explanation}</p>
                <hr />
            </div>
        )
    })



    useEffect(() => {
        testService
            .createTest()
            .then(res => {
                console.log('data', res);
                setExam(res)

            })
            .catch(err => {
                console.log("!!!!! ERROR CREATING TEST !!!!!!!!!", err);
            })
    }, [])

    return (
        <Container>
            <ul>
                <Heading>{exam?.author}</Heading>
                <p>{exam?.createdAt}</p>
                <p>{exam?.id}</p>
                <br />
                <li>
                    {questoions}
                </li>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    // background-color: #131a22;
`;

const Heading = styled.h2`
    margin-bottom: 60px;
    color: #322775;
    font-weight: 700;
    font-size: 32px;
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.6s ease-in-out;
    min-width: 600px;
    max-width: 800px;
    align-items: center;
    padding: 99px;
    background-color: #ffffff;
`;

const Input = styled.input`
    width: 100%;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 16px 22px;
    margin-bottom: 10px;
`;

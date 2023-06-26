const steps = `    <div style="width: 100vw;font-size: 30px;">
        <h1 style="color: rgb(47, 75, 141);">Uses of this api</h1>
        <h3>Note : On every request after signup, it is mandatory to pass token in HEADER as Authorization use prefix Bearer*</h3>
        <pre>
            
            Key : Value
            Authorization : "Bearer" + Token
        </pre>
        <ol>
            EndPoints
            <li><code>https://quoteapi.cyclic.app/</code></li>
            <p>You will got Guide</p>
            <li><code>https://quoteapi.cyclic.app/users/signup</code></li>
            <p>You have to signup by</p>
            Method:POST*
            <ul>
                <li>username</li>
                <li>email</li>
                <li>password</li>
            </ul>
            <p>You Will got a token (Which is JWT Token) Save it*</p>
            <li><code>https://quoteapi.cyclic.app/quotes</code></li>
            <p>You have to create some quotes by</p>
            Method:POST*
            <ul>

                <li>title</li>
                <li>description</li>
            </ul>
            <p>You will get created quote</p>

            <li><code>https://quoteapi.cyclic.app/quotes</code></li>
            <br>
            Method:GET*
            <p>You will get those quotes which are created by you!</p>


        </ol>
    </div>
`;

module.exports = steps;

import { Selector } from 'testcafe';

fixture `Wenker`
    .page `localhost:8080`;

test('Login User', async t => {
    await t
        .click(Selector('.drawer-content').find('button').withText('ANMELDEN'))
        .typeText(Selector('.form-field').find('[name="email"]'), 'abc@abc.com')
        .typeText(Selector('div').withText('Passwort').nth(8).find('[name="password"]'), 'abcabcabc')
        .click(Selector('.content-subsection').find('button').withText('ANMELDEN'));
});

test('New Test', async t => {
    await t
        .click(Selector('.drawer-content').find('button').withText('ANMELDEN'))
        .typeText(Selector('.form-field').find('[name="email"]'), 'testing@newuser.com')
        .pressKey('tab')
        .typeText(Selector('div').withText('Passwort').nth(8).find('[name="password"]'), 'test1234')
        .click(Selector('.content-subsection').find('button').withText('ANMELDEN'))
        .click(Selector('span').withText('TRANSKRIBIEREN'))
        .click(Selector('#canton'))
        .click(Selector('#range'))
        .click(Selector('.button.button-primary'))
        .typeText(Selector('#qutxt'), 'Im Winter')
        .click(Selector('button').withText('NÄCHSTER SATZ'))
        .typeText(Selector('#qutxt'), 'Er forc gli irff')
        .click(Selector('button').withText('NÄCHSTER SATZ'))
        .click(Selector('button').withText('NÄCHSTER BOGEN'))
        .typeText(Selector('#qutxt'), 'Im winter fl')
        .pressKey('meta')
        .typeText(Selector('#qutxt'), 'ge di rtrochene Bltter ir Lif')
        .pressKey('backspace backspace')
        .pressKey('backspace')
        .typeText(Selector('#qutxt'), 'uft urme')
        .click(Selector('button').withText('NÄCHSTER SATZ'))
        .typeText(Selector('#qutxt'), 'Es hø')
        .pressKey('backspace')
        .typeText(Selector('#qutxt'), 'rt fli')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#qutxt'), 'glui')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#qutxt'), 'i uu')
        .pressKey('backspace')
        .typeText(Selector('#qutxt'), 'f ')
        .click(Selector('button').withText('NÄCHSTER SATZ'))
        .click(Selector('button').withText('NÄCHSTER BOGEN'))
        .click(Selector('button').withText('NÄCHSTER BOGEN'))
        .click(Selector('.task-select'))
        .click(Selector('button').withText('BEENDEN'));
});

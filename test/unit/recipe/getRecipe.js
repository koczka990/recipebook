var expect = require('chai').expect;
var getRecipeMW = require('../../../middlewares/recipe/getRecipe');

describe('getRecipe middleware ', function () {

  it('should return recipe by id', function (done) {
        const mw = getRecipeMW({
            RecipeModel:{
                findOne:(p1,cb) => {
                    expect(p1).to.be.eql({_id: '13'});
                    cb(null, 'mockrecipe');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params:{
                recipeid: '13'
            }
        },
        resMock,
        () => {
            expect(resMock.locals).to.be.eql({recipe: 'mockrecipe'});
            done();
        })
  });

  it('should return error when there is a problem', function (done) {
    const mw = getRecipeMW({
        RecipeModel:{
            findOne:(p1,cb) => {
                expect(p1).to.be.eql({_id: '13'});
                cb('hiba', null);
            }
        }
    });

    const resMock = {
        locals: {}
    };
    mw({
        params:{
            recipeid: '13'
        }
    },
    resMock,
    (err) => {
        expect(err).to.be.eql('hiba');
        done();
    })
  })
});
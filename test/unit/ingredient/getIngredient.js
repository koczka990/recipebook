var expect = require('chai').expect;
var getIngredientMW = require('../../../middlewares/ingredient/getIngredient');

describe('getIngredient middleware ', function () {

  it('should return ingredient by id', function (done) {
        const mw = getIngredientMW({
            IngredientModel:{
                findOne:(p1,cb) => {
                    expect(p1).to.be.eql({_id: '13'});
                    cb(null, 'mockingredient');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params:{
                ingredientid: '13'
            }
        },
        resMock,
        () => {
            expect(resMock.locals).to.be.eql({ingredient: 'mockingredient'});
            done();
        })
  });

  it('should return error when there is a problem', function (done) {
    const mw = getIngredientMW({
        IngredientModel:{
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
            ingredientid: '13'
        }
    },
    resMock,
    (err) => {
        expect(err).to.be.eql('hiba');
        done();
    })
  })
});
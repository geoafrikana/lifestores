import graphene

from graphene_django import DjangoObjectType, DjangoListField
from .models import Drug


class DrugType(DjangoObjectType):
    class Meta:
        model=Drug
        field = "__all__"

class Query(graphene.ObjectType):
    all_drugs = graphene.List(DrugType)
    drug = graphene.Field(DrugType, drug_id =graphene.Int())

    def resolve_all_drugs(self, info, **kwargs):
        return Drug.objects.all()
    
    def resolve_drug(self, info, drug_id):
        return Drug.objects.get(pk=drug_id)


class DrugInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    sku= graphene.String()
    price = graphene.Int()
    image = graphene.String()


class CreateDrug(graphene.Mutation):
    class Arguments:
        book_data = DrugInput(required=True)

    drug = graphene.Field(DrugType)

    @staticmethod
    def mutate(root, info, drug_data=None):
        drug_instance = Drug(
            name = drug_data.name,
            description = drug_data.description,
            sku= drug_data.sku,
            price= drug_data.price,
            image = drug_data.image
        )

        drug_instance.save()
        return CreateDrug(drug=drug_instance)


schema = graphene.Schema(query=Query)